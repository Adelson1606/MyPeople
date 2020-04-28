const source = $('#template').html()
const template = Handlebars.compile(source)

const users = []

$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function (data) {
    const personInfoArr = data.results
    users.push(...personInfoArr)
    console.log(users)    
    const newHTML = template({ pepArr: users })
    $('#results').append(newHTML)

  }
}) 

