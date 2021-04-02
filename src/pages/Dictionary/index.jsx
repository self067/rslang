import React, { useState, useEffect } from 'react';
import WordCard from '../../components/wordCard';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
  StyledTitle,
} from '../styled';

import { StyledInner } from './styled';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPaginate from 'react-paginate';
import './styles.css';
import ModalSetup from '../../components/setup';
import { StyledLoader } from '../../components/loader';

function Dictionary() {
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [group, setGroup] = useState(0);

  const [isChecked, setIsChecked] = useState({
    wordTranslate: true,
    definitionTranslate: true,
    sentenceTranslate: true,
    transcription: true,
    difficultWords: true,
    deleteWords: true,
  });
  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const fetchDataLink = `${baseUrl}words?group=${group}&page=${page.toString()}`;
  const skillLevels = [
    'Beginner',
    'Elementary',
    'Pre-intermediate',
    'Intermediate',
    'Upper-intermediate',
    'Advanced',
  ];

  useEffect(() => {
    const setup = localStorage.getItem('setup');
    if (setup) {
      setIsChecked(JSON.parse(setup));
    }
  }, []);

  useEffect(() => {
    fetch(fetchDataLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [fetchDataLink]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <StyledSection>
        <StyledVideo src="video/video.mp4" autoPlay loop muted />
        <StyledContainer>
          <StyledInner>
            <StyledTitle>Электронный учебник</StyledTitle>
            <ModalSetup setIsChecked={setIsChecked} isChecked={isChecked} />
          </StyledInner>

          <div className="cards__wrapper">
            <Tabs
              onSelect={(index) => {
                setCard(null);
                setGroup(index);
              }}
              selectedTabClassName={'level-color__' + group}
            >
              <div className="tabs-header">
                Сложность - {skillLevels[group]}
              </div>
              <TabList>
                <Tab>1</Tab>
                <Tab>2</Tab>
                <Tab>3</Tab>
                <Tab>4</Tab>
                <Tab>5</Tab>
                <Tab>6</Tab>
              </TabList>
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
            </Tabs>
            <div className="cards">
              {items.map((item) => {
                return (
                  <WordCard
                    card={card}
                    isChecked={isChecked}
                    setCard={setCard}
                    word={item.word}
                    transcription={item.transcription}
                    translation={item.wordTranslate}
                    meaningText={item.textMeaning}
                    meaningTextTranslated={item.textMeaningTranslate}
                    textExample={item.textExample}
                    textExampleTranslated={item.textExampleTranslate}
                    imageSrc={baseUrl + item.image}
                    wordSoundSrc={item.audio}
                    meaningSoundSrc={item.audioMeaning}
                    exampleSoundSrc={item.audioExample}
                    cardColorStyle={'level-color__' + group}
                    key={item.word}
                  />
                );
              })}
            </div>
            <div className="pagination">
              <ReactPaginate
                pageCount={30}
                pageRangeDisplayed={2}
                marginPagesDisplayed={3}
                onPageChange={(page) => {
                  setCard(null);
                  setPage(page.selected);
                }}
              />
            </div>
          </div>
        </StyledContainer>
      </StyledSection>
    );
  }
}

export default Dictionary;
