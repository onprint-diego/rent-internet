import styled from 'styled-components'

export const CalendarContainer = styled.div`
    margin: 2rem 0;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

    & > div:first-of-type {
        padding: 1rem;
        border-radius: 5px;
        /* border: 1px solid var(--primary-color); */
        margin: 0;
    }

    & > div:first-of-type:hover {
        /* Add shadow? */
    }
    
    #react-day-picker-2 {
        font-family: var(--titles-font);
    }
`

export const Label = styled.p`
    margin-bottom: .5rem;
`