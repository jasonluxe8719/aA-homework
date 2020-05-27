function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }

  function madLib(verb, adjective, noun) {
    console.log(`We shall `#{verb}` the `#{adjective}` `#{noun}``);
  }

  madLib('make', 'best', 'guac');

  
  