import { IEducation } from '../../../data/types';
import { Column, Row } from '../views/styledContainers';
import { H3, H4, H6, Text } from '../views/styledTexts';

export default function Education({ data }: { data: IEducation }) {
  return (
    <Column margin="20px 0">
      <H3>{data.title}</H3>
      {data.entries.map((el, i) => {
        return (
          <Column key={i}>
            <Row>
              <H6 width="20%">{`${el.startYear} - ${el.endYear}`}</H6>
              <H4 width="40%">{el.institution}</H4>
              <Text width="40%">{el.description}</Text>
            </Row>
          </Column>
        );
      })}
    </Column>
  );
}
