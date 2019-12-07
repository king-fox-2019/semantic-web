let theme = 'light'
function toggleTheme(){
  if (theme == 'light'){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'
    theme = 'dark'
  } 
  else {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    theme = 'light'
  }
}