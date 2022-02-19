import React from 'react';

export const Small = React.memo(({value}) => {
    console.log('Me Volvi a Llamar');
    //Solo si los prop cambian
return (
    <small>{value}</small>
)
})
