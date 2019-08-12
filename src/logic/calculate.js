//helper functions
function isNumeric(num) {
  return !isNaN(num)
}

//main driver
function calculate(state, buttonName) {
  if (buttonName == "AC") {
    return {
      history: "",
      current: "0",
      operation: null,
    };
  }


  if (state.current == "ERROR" || state.current == "Infinity") {
    return;
  } else {
    if (buttonName == "Del") {
      if (state.current == "0") {
        if (state.history == "") {
          return;
        } else {
          return {
            history: state.history.substring(0, state.history.length - 1)
          };
        }
      } else {
        if (state.current.replace("-", "").length == 1) {
          return {
            current: "0"
          };
        } else {
          return {
            current: state.current.substring(0, state.current.length - 1)
          };
        }
      }
  
    
    } else if (buttonName == "+/-") {
      if (state.current[0] == "-") {
        return {
          current: state.current.substring(1,state.current.length)
        };
      } else {
        return {
          current: "-" + state.current 
        };
      }
    
  
    } else if (buttonName == ".") {
      return {
        current: state.current + "."
      };
  
  
    } else if (isNumeric(buttonName)) {
      if (state.history[state.history.length-1] == "=") {
        if (state.current == "0") {
          return {
            current: buttonName, 
            history: "",
          };
        } else if (state.current == "-0") {
          return {
            current: "-" + buttonName,
            history: "",
          };
        } else {
          return {
            current: state.current + buttonName,
            history: "",
          };
        }
      } else {
        if (state.current == "0") {
          return {
            current: buttonName 
          };
        } else if (state.current == "-0") {
          return {
            current: "-" + buttonName
          };
        } else {
          return {
            current: state.current + buttonName
          };
        }
      }
      

    } else if (buttonName == "(" ) {
      if (state.history[-1] == "=") {
        return {
          history: state.current + "*(",
          current: "0",
        };
      } else {
        if (state.current == "0") {
          return {
            history: state.history + "("
          };
        } else {
          return {
            history: state.history + state.current + "*("
          }
        }
      }
  
  
    } else if (buttonName == "=") {
      try {
        return {
          current: eval(state.history + state.current).toString(),
          history: state.history + state.current + "=",
        };
      } 
      catch(err) {
        return {
          current: "ERROR",
          history: state.history + state.current + "=",
        }
      }
  
  
    } else if (buttonName == "x") {
      if (state.history[state.history.length-1] == "="){
        return {
          history: state.current + "*",
          current: "0",
        };
      } else {
        return {
          history: state.history + state.current + "*",
          current: "0",
        };
      }
    
    
    } else {
      if (state.history[state.history.length-1] == "="){
        return {
          history: state.current + buttonName,
          current: "0",
        };
      } else {
        return {
          history: state.history + state.current + buttonName,
          current: "0",
        };
      }
    }
  }


  
}



export default calculate;