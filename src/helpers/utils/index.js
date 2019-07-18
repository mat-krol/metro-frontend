export const calculateCenter = string => {
    const items = string.replace(/[a-z]/gi, '').replace( /\s\s+/g, ' ' ).split(" ").slice(1, -1).map(x => parseFloat(x))
    var res = [], size = 2;
    while (items.length > 0) res.push(items.splice(0, size));
    return applyFormula(res)
  }
  
  const applyFormula = array => {
    let c_x = 0, c_y = 0, a = 0
    for (var i = 0; i < array.length - 1; i++) {
        let delta_a = array[i][0]*array[i+1][1] - array[i+1][0]*array[i][1]
        let delta_x = (array[i][0] + array[i+1][0])*delta_a
        let delta_y = (array[i][1] + array[i+1][1])*delta_a

        a = a + delta_a
        c_x = c_x + delta_x
        c_y = c_y + delta_y
    }

    const final_a = a / 2
    const final_c_x = c_x / (6 * final_a)
    const final_c_y = c_y / (6 * final_a)
    return [final_c_x, final_c_y]
  }