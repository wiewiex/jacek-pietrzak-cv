import { Column } from '../views/styledContainers';
import { H3 } from '../views/styledTexts';
import { IExperience } from '../../../data/types';
import SingleExperienceEntry from './SingleExperienceEntry';
import { IEntry } from '../../../data/types';

export default function Experience({
  data,
  showTitle,
  fromEntry,
  toEntry,
}: {
  data: IExperience;
  showTitle?: boolean;
  fromEntry?: number;
  toEntry?: number;
}) {
  let entriesList: IEntry[] = [];

  if (fromEntry && toEntry) {
    entriesList = data.entries.slice(fromEntry, toEntry);
  } else if (!fromEntry && toEntry) {
    entriesList = data.entries.slice(0, toEntry);
  } else if (fromEntry && !toEntry) {
    entriesList = data.entries.slice(fromEntry, data.entries.length);
  }

  return (
    <Column>
      {showTitle ? <H3>{data.title}</H3> : null}
      {entriesList.map((el, i) => {
        return <SingleExperienceEntry data={el} key={i} />;
      })}
    </Column>
  );
}
