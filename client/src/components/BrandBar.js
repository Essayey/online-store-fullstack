import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row>
            {device.brands.map(brand =>
                <Card
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    style={{ maxWidth: 'fit-content', cursor: 'pointer' }}
                    className='p-3 me-3 '
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar