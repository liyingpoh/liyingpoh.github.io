console.log("**** [START] *****")
    
    let api_endpoint_url = `home/chat.php`
    
    axios.get(api_endpoint_url)
    .then(response => {
        
        // Inspect the response.data
        console.log(response)
        let items = response.data
        
        // DOM
        temp_html = ""
        for(item of items) {
            
            temp_html += `<tr>`
        
            temp_html += `
            <td>${item.who}</td>
            <td>${item.text}</td>
            `
            
            temp_html += `</tr>`
        }
        
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = temp_html
        
    })
    .catch(error => {
        // In case of any error, see what it's about
        console.log(error.message)
    })
    
console.log("**** [END] *****")





function displayResults() {
    console.log("**** [START] *****")

        let user_name = document.getElementById('user_name').value;
        let message = document.getElementById('message').value;
        console.log(user_name, message);
        
        let api_endpoint_url = `home/chat.php`
        
        axios.get(api_endpoint_url, {
            params: {
                nickname: user_name,
                text: message
            }
        })
        .then(response => {
            
            // Inspect the response.data
            console.log(response)
            let items = response.data
            
            // DOM
            temp_html = ""
            for(item of items) {
                
                temp_html += `<tr>`
            
                temp_html += `
                <td>${item.who}</td>
                <td>${item.text}</td>
                `
                
                temp_html += `</tr>`
            }
            
            let tbody = document.getElementById("tbody")
            tbody.innerHTML = temp_html
            
        })
        .catch(error => {
            // In case of any error, see what it's about
            console.log(error.message)
        })
        
    console.log("**** [END] *****")
}