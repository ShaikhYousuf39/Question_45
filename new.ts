type car = {
    manufacture: string
    model: string
    [key: string]: any;

}
function createcar(manufacture :string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional

    }
}
const mycar:car =createcar("Lamborghini","RollsRoyce",{color : "Black", year:  "2023"});
console.log(mycar);