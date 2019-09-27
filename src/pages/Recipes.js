import React, { Component } from 'react';
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this)
    }
    state = {
        recipes: recipeData,
        search: "",
        url: `https://www.food2fork.com/api/search?key=04b97c68e1373a82591975647e6e5279`,
        base_url: `https://www.food2fork.com/api/search?key=04b97c68e1373a82591975647e6e5279`,
        query:'&q=',
        error:''

    }

    async getRecipes() {
        try {
            const data = await fetch(this.state.url)
            const jsondata = await data.json()
            console.log("data");            
            console.log(jsondata);
            this.setState({
                recipes: jsondata.recipes
            })            
        }
        catch (error) {
            console.log(error);
            
        }
    }
    componentDidMount() {
        this.getRecipes();

    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {base_url,query,search} = this.state
        this.setState({
            url:`${base_url}${query}${search}`,
            search:""
        },()=> this.getRecipes())
    };

    render() {
        return (
            <div>
                
                <Search search={this.state.search} handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
                <RecipeList recipes={this.state.recipes} />
                
            </div>
        );
    }
}

export default Recipes;