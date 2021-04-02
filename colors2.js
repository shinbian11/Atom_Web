var Links = {
  SetColor: function(color)
  {
    var i = 0;
    var alist = document.querySelectorAll('a');
    while(i < alist.length){
      alist[i].style.color = color;
      i = i+1;
    }
  }
}

var Body = {
  SetColor: function(color)
  {
      document.querySelector('body').style.color=color;
  },
  SetSecretColor: function(color)
  {
      document.querySelector('p').style.color=color;
  },
  SetBackgroundColor: function(color)
  {
      document.querySelector('body').style.backgroundColor=color;
  }
}

function BaboHandler(self){

      if (self.value === 'ClickDay')  {
        Body.SetColor('white');
        Body.SetSecretColor('yellow');
        Body.SetBackgroundColor('black');
        Links.SetColor('white');
        self.value='ClickNight';
      }

      else  {
        Body.SetColor('black');
        Body.SetSecretColor('red');
        Body.SetBackgroundColor('white');
        Links.SetColor('black');
        self.value='ClickDay';
      }
}
