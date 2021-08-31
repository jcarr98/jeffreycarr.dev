import { react } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Grommet, Heading } from 'grommet';

function RecipeCard(props) {
    const link = "http://recipe.localhost:3000/recipe/" + props.id;

    return (
        <Grommet>
            <Card align='center' background='light-1'>
                <CardHeader background="brand" size="large" pad="small">
                    {props.name}
                </CardHeader>
                <CardBody pad="medium">{props.details}</CardBody>
                <CardFooter>
                    <Button primary href={link} label="Check Out" />
                </CardFooter>
            </Card>
        </Grommet>
    )
}

export default RecipeCard;