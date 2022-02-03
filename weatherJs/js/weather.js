class weather{
    constructor(city,state)
    {
        this.apiKey = "9cfca3d301c4e497eed4293416393b0e"
        this.city = city;
        this.state = state;
    }
   async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
    if(response.ok && response.status ===200){
        const responseData = response.json();
        return responseData;
    }
    else{
        throw Error(response.status)
    }
    }

    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
   get location(){
        return this.city + ' , ' + this.state;
    }
    
}