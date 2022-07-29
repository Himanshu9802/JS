const searchFn = () => {
  let searchString = document.getElementById("searchQuery").value.toLowerCase();

  let tbData = document.getElementById("table");

  let tr = tbData.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let data = tr[i];

    if (data) {
      let textVal = data.textContent || data.innerHTML;
      
      if (textVal.toLowerCase().indexOf(searchString) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  const ar1 = ['H','i','m','m'];
  
  const ar2 = ['H','i','i','H','m'];
  
  var union = [...new Set([...ar1, ...ar2])];

};


