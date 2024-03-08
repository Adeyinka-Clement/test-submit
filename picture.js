let picArray = []
let returnpicarray = ''
const FetchPic = async ()=>{
    if (inp.value !== "") {
        picArray = []
        showPic.innerHTML = ""
        picArray = []
        let URLpic = `https://pixabay.com/api/?key=42450190-1160fb2f4840de43f15ec4c76&q=${inp.value}&image_type=photo`
        document.getElementById("inp").value = ""
        let responsepic = await fetch(URLpic)
        let convertedResponsepic = await responsepic.json()
        let neccessary = convertedResponsepic.hits
        for (let index = 0; index < neccessary.length; index++) {
            elementpic = neccessary[index];
            picArray.push(elementpic.largeImageURL)
        }
        console.log(picArray);
        for (let i = 0; i < picArray.length; i++) {
            showPic.innerHTML += `
    <div class =  'imgcont col-6'>
    <img id="img" class = "m-2" src="${picArray[i]}" alt="">
    <small class=" rounded-4 py-2 px-5 text-white"><b>Click me</b></small>
    </div>
    `
        }
    document.body.style.backgroundColor = "white"
    }
    else{
        alert("please enter something in the spaces provided")

    }
}   