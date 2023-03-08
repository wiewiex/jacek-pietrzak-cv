import { IEntry } from '../../../data/types';
import { Column, IconContainer, Row } from '../views/styledContainers';
import { H4, H6, Text } from '../views/styledTexts';
import Image from 'next/image';

export default function SingleExperienceEntry({ data }: { data: IEntry }) {
  const printExperienceDuration = (startDate: Date, endDate: Date | null) => {
    const start = startDate.toDateString().split(' ');
    const end = endDate ? endDate.toDateString().split(' ') : 'present';

    if (end === 'present') {
      return `${data.logo ? start[1] : ''} ${start[3]} - present`;
    }
    return `${data.logo ? start[1] : ''} ${start[3]} - ${
      data.logo ? end[1] : ''
    } ${end[3]}`;
  };

  return (
    <Column>
      <Row>
        <H6 width="25%">
          {printExperienceDuration(data.startTime, data.endTime)}
        </H6>
        <H4 width="55%">{data.position}</H4>
        {data.logo ? (
          <IconContainer>
            <Image src={data.logo} width={30} height={30} alt="company logo" />
          </IconContainer>
        ) : (
          <IconContainer />
        )}
      </Row>
      <Text dangerouslySetInnerHTML={{ __html: data.description }} />
    </Column>
  );
}
