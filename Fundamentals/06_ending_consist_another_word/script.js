//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    str_len = str.length;
    ending_len = ending.length;


    res = (ending[ending_len - 1] == str[str_len - 1] && str.includes(ending)) || ending == '';
    // console.log(ending[ending_len - 1], str[str_len - 1]);
    return res;
}

console.log(solution("abcd", "d"))


/*function solution(str, ending){
  return str.endsWith(ending);
}*/

/*function solution(str, ending){
  return str.substr(-ending.length) == ending;
}*/

/*function solution(str, ending){
  return str.slice(0 - ending.length) === ending;
}*/