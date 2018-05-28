class ValidationService {
  
  static isValidTextInput(value) {
    return value && value !== '';
  }

}

export default ValidationService;