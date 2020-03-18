import React, { useState } from 'react';
import styled from 'styled-components';

const FormPage = styled.div`
  box-sizing: border-box;
  padding-bottom: 1rem;
  height: 100%;
`;

const Container = styled.section`
  height: 100%;
  margin: 0 1rem;

  @media(min-width: 768px) {
    margin: 0 3rem;  
  }

  @media(min-width: 1224px) {
    margin: 0 8rem;  
  }
`;

const JournalEntry = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContent = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DateSection = styled.p`
  flex: 0;
  color: #6c6c6c;
  font-size: 1.125rem;
`;

const TitleSection = styled.label`
  flex: 0 1 0;
  margin-bottom: 1rem;
`;

const BodySection = styled.label`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.textarea`
  width: 100%;
  color: #333;
  padding: 0.5rem;
  margin: 12px 0 0 0;
  resize: none;
  outline: none;
  font-size: 1.265625rem;
  background: transparent;
  line-height: 1.3;
  font-weight: 600;
  display: block;
`;

const BodyInput = styled.textarea`
  width: 100%;
  color: #333;
  padding: 0.5rem;
  margin: 12px 0;
  resize: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  line-height: 1.4rem;
  display: block;
  flex: 1;
`;

const SubmitButton = styled.button`
  display: block;
  padding: 20px 10px;
  border-radius: 5px;
  color: white;
  letter-spacing: 1px;
  font-size: 100%;
  font-size: 1.125rem;
  font-family: inherit;
  border: none;

  background-color: #6068f1;

  &:hover {
    cursor: pointer;
  }
`;

const Form = ({ history }) => {
  let date = new Date();
  let dateAsString = date.toDateString();

  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log({ title, bodyText });
    storePostInDatabase();
  }

  const storePostInDatabase = () => {
    console.log('im being called');

    console.log('date', date);
    const obj = {
      title: title,
      body: bodyText,
      date: date
    }

    fetch('/entry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(async (response) => {
      console.log('Success: ', await response.json());
      history.push('/allposts');
    }).catch((error) => {
      console.log('Error: ', error);
    });
  }

  return(
      <FormPage>
        <Container>
          <form style={{ height: '100%' }} onSubmit={handleSubmit}>
            <PageContent>
              <JournalEntry>

              <DateSection> {dateAsString}</DateSection>

                <TitleSection>
                <div style={{ fontSize: '0.88875rem', fontWeight: '600'}}>Title</div>
                  <TitleInput
                    label="Title"
                    maxLength="65"
                    required
                    rows="1"
                    placeholder="Today Is A Beautiful Day"
                    onChange={e => setTitle(e.target.value)}
                    value={title}>
                  </TitleInput>
                </TitleSection>

                <BodySection>
                <div style={{ fontSize: '0.88875rem', fontWeight: '600' }}>Body</div>
                  <BodyInput
                    label="Body"
                    required
                    placeholder="My morning began with a crepe and a coffee. It was lovely."
                    rows="12"
                    onChange={e => setBodyText(e.target.value)}
                    value={bodyText}>
                  </BodyInput>
                </BodySection>
              </JournalEntry>
              <SubmitButton type="submit">Share Anonymously</SubmitButton>
            </PageContent>
          </form>
        </Container>
      </FormPage>
  )
};

export default Form;