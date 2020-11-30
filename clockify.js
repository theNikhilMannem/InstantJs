
// Time formatting for minutes and seconds.

clockify(min, sec) {
    // let zero = 0;
    if (!sec) {
      if (min.toString().length === 1) {
        return "0"+min+":"+"00";
      }
      return min+":"+"00";
    }
    else {
      if (sec.toString().length === 1) {
        if (min.toString().length === 1) {
          return "0"+min+":0"+sec;
        }
        return min+":0"+sec;
      }
      else {
        if (min.toString().length === 1) {
          return "0"+min+":"+sec;
        }
        return min+":"+sec;
      }
    }
  }
