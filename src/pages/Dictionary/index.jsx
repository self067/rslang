import React, { useState, useEffect } from 'react';
import WordCard from '../../components/wordCard';
import { StyledContainer, StyledVideo, StyledSection } from '../styled';

import { StyledInner, StyledTitle } from './styled';

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
  const [translate, setTranslate] = useState(true);
  const [showBttn, setShowBttn] = useState(true);
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
    setTranslate(JSON.parse(localStorage.getItem('setupTranslate')));
  }, [translate]);

  useEffect(() => {
    setShowBttn(JSON.parse(localStorage.getItem('setupBttn')));
  }, [showBttn]);

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
            <ModalSetup
              translate={translate}
              setTranslate={setTranslate}
              showBttn={showBttn}
              setShowBttn={setShowBttn}
            />
          </StyledInner>

          <div className="cards__wrapper">
            <Tabs
              onSelect={(index) => {
                setGroup(index);
              }}
            >
              <div className="tabs-header">
                {' '}
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
                    translate={translate}
                    showBttn={showBttn}
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
