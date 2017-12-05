import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class DecideApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  constructor(props) {
    super(props);

    const json = JSON.stringify(this.state.options);

    localStorage.setItem('options', this.json);
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option
    }));
  }

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => (
      { 
        options: prevState.options.filter((val) => val !== option)
      }
    ));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount = () => {
    console.log('will unmount!');
  }

  render = () => {
    return (
      <div>
        <Header title="Decide App" subtitle="Let Us Do The Hard Work." />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePickOption={this.handlePickOption} 
          />
          <Options 
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptions={this.handleDeleteOptions} 
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
