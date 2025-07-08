import styled from 'styled-components';


const Card = styled.div`
  background-color: #fff7f0;
  padding: 24px;
  max-width: 600px;
  margin: auto;
  border-radius: 16px;
  font-family: 'Arial', sans-serif;
`;

const Image = styled.img`
background:url('');
  width: 100%;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #5f5f5f;
  line-height: 1.6;
`;

const Section = styled.section`
  margin: 24px 0;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
  color: hsl(332, 51%, 32%);
`;

const TimeBox = styled.div`
  background-color: hsl(330, 100%, 98%);
  padding: 16px;
  border-radius: 12px;
`;

const TimeList = styled.ul`
  padding-left: 20px;
`;

const IngredientList = styled.ul`
  padding-left: 20px;
  li {
    margin-bottom: 6px;
  }
`;

const InstructionList = styled.ol`
  padding-left: 20px;
  li {
    margin-bottom: 12px;
    line-height: 1.5;
  }
  b {
    color: #000;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    font-weight: 600;
  }
`;

const RecipeCard = () => {
  return (
    <Card>
      <Image src='https://i.postimg.cc/3rXfBtkC/2025-07-08-133443.png' alt="https://i.postimg.cc/3rXfBtkC/2025-07-08-133443.png" />
      <Title>Simple Omelette Recipe</Title>
      <Description>
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </Description>

         <Section>
         <SubTitle>Preparation time</SubTitle>
         <TimeBox>
          <TimeList>
         <li><b>Total:</b> Approximately 10 minutes</li>
         <li><b>Preparation:</b> 5 minutes</li>
         <li><b>Cooking:</b> 5 minutes</li>
         </TimeList>
         </TimeBox>
         </Section>

         <Section>
         <SubTitle>Ingredients</SubTitle>
         <IngredientList>
          <li>2–3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </IngredientList>
         </Section>

         <Section> 
         <SubTitle>Instructions</SubTitle>
         <InstructionList>
          <li><b>Beat the eggs</b> in a bowl, season with salt and pepper.</li>
          <li><b>Heat the pan</b> with butter/oil over medium heat.</li>
          <li><b>Cook the omelette</b> until edges firm up, then flip if needed.</li>
          <li><b>Add fillings</b> on one side before folding the omelette.</li>
          <li><b>Fold and serve</b> once golden and set. Enjoy hot!</li>
         </InstructionList>
         </Section>

         <Section>
         <SubTitle>Nutrition</SubTitle>
         <p>The table below shows nutritional values per serving without additional fillings.</p>
         <Table>
          <tbody>
            <tr>
              <th>Calories</th>
              <td>277kcal</td>
             </tr>
             <tr>
              <th>Carbs</th>
              <td>0g</td>
             </tr>
             
             
             <tr>
              <th>Protein</th>
              <td>20g</td>
             </tr>
             <tr>
              <th>Fat</th>
              <td>22g</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Card>
  );
};

export default RecipeCard;
