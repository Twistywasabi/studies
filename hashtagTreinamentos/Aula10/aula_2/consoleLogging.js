console.log(1);
const result = setTimeout(write2OnConsoleAndReturnString, 2000);
console.log(result);
write2OnConsoleAndReturnString()

function write2OnConsoleAndReturnString() {
  console.log(2);
  return 'Procedure Completed';
}

