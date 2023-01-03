const solution = (sizes) => {
    let w = [];
    let h = [];
    
    sizes.map((x,i) => {
      w[i]=Math.max(...x)
      h[i]=Math.min(...x)
    })
    return Math.max(...w)*Math.max(...h);
  }