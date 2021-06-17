import React, { Component } from 'react'
import Nav from './Nav';
import { Card } from 'primereact/card';
export default class Home extends Component {
    render() {
        const header = (
            <img alt="Card" src="./pics/blood.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
        );
        return (
            <div>
                <Nav/>
                <div style={{display:'flex'}}>
                    <Card title="Get Donars" style={{ width: '25em',margin:'6rem'}} header={header} className="p-shadow-1">
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                    <Card title="Get Blood sample" style={{ width: '25em',margin:'6rem'}} header={header} className="p-shadow-1">
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                    <Card title="Donate Blood " style={{ width: '25em',margin:'6rem'}} header={header} className="p-shadow-6">
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                    
                </div>
            </div>
        )
    }
}
