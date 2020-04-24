const source = $('#template').html()
const template = Handlebars.compile(source)

const pepArr = []

$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function (data) {
    const persinInfoArr = data.results
    pepArr.push(...persinInfoArr)
    console.log(pepArr)    
    const newHTML = template({ pepArr })
    $('#results').append(newHTML)

  }
}) 

