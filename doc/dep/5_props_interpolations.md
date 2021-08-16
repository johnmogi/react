hmmm , passing data to props... basic but powerfull,
need a way to convert this:
import React, { Component, SyntheticEvent } from "react";
import "./home.css";
import { Heading } from "../heading/heading";

interface HomeState {
    currentDiscount: number;
    imageWidth: number;
    textColor: string;
    vegetables: { id: number, name: string }[];
    fruits: { id: number, name: string }[];
    colors: string[];
}

export class Home extends Component<any, HomeState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            currentDiscount: 12,
            imageWidth: 300,
            textColor: "",
            vegetables: [
                { id: 1, name: "Tomatoes" },
                { id: 2, name: "Carrots" },
                { id: 3, name: "Onions" },
                { id: 4, name: "Potatoes" },
            ],
            fruits: [
                { id: 1, name: "Apples" },
                { id: 2, name: "Bananas" },
                { id: 3, name: "Peaches" },
                { id: 4, name: "Oranges" },
                { id: 5, name: "Grapes" },
            ],
            colors: ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white"]
        };
    }

    public render(): JSX.Element {
        return (
            <div className="home">

                <Heading>Best Products Website Ever!</Heading>

                {this.isSummer() && <p>Summer Sale!</p>}

                {/* Interpolation:  */}
                <p style={{ color: this.state.textColor }}>Only now, {this.state.currentDiscount}% discount on all products!</p>

                {/* Property Binding:  */}
                <img src="/assets/images/home.png" width={this.state.imageWidth} />

                <section>
                    <input type="text" placeholder="Enter a Color..." value={this.state.textColor} onChange={this.changeColor} />
                    <br />

                    {/* Event Binding:  */}
                    <button onClick={this.decreaseImage}>&darr;</button>
                    <button onClick={this.resetImage}>&harr;</button>
                    <button onClick={this.increaseImage}>&uarr;</button>
                    <br />

                    {/* Two-Way Binding*/}
                    <input type="range" min="100" max="500" value={this.state.imageWidth} onChange={this.updateImageWidth} />

                    <hr />

                    <p>Apples</p>
                    <p>Bananas</p>
                    <p>{this.isWinter() ? "Avocados" : "No Avocados"}</p>

                    {/* Conditional Rendering (Short Circuit) */}
                    {this.isWinter() && <p>Oranges</p>}

                    {this.state.vegetables.map(v => <p key={v.id}>{v.name}</p>)}

                    <select onChange={this.showSelected}>
                        <option selected disabled>Select Fruit...</option>
                        {this.state.fruits.map(f => <option key={f.id}>{f.name}</option>)}
                    </select>

                    {this.state.colors.map(c => <p style={{ color: c }} key={c}>{c}</p>)}

                </section>

            </div>
        );
    }