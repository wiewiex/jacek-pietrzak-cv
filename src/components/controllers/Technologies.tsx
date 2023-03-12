import { TechnologiesContainer, Column } from '../views/styledContainers';
import { H3 } from '../views/styledTexts';
import { ITechnologies } from '../../../data/types';
import SingleTechnology from './SingleTechnology';
import SingleTool from './SingleTool';

export default function Technologies({ data }: { data: ITechnologies }) {
  return (
    <Column>
      <H3>{data.title}</H3>
      <TechnologiesContainer>
        {data.technologies.map((el, i) => {
          return (
            <SingleTechnology
              icon={el.icon}
              name={el.name}
              level={el.level}
              key={i}
            />
          );
        })}
        {data.tools.map((el, i) => {
          return <SingleTool icon={el.icon} name={el.name} key={i} />;
        })}
      </TechnologiesContainer>
    </Column>
  );
}
