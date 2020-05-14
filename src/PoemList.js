import React from 'react';
import { PoemCard } from './PoemCard';


export function PoemList(props){

    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poems.map( poem => (
           
            <PoemCard
                
                name={poem.name}
                content={poem.content}
                delete={props.delete}
                update={props.update}
            />
        ))}
        </div>
    )
}