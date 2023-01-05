import styled from 'styled-components'

export const CalendarContainer = styled.div`
    margin: 2rem 0;

    & > div:first-of-type {
        padding: 1rem;
        border-radius: 5px;
        margin: 0;
    }
    
    #react-day-picker-2 {
        font-family: var(--titles-font);
    }


    .rdp-caption_label {
        font-size: 1.5rem !important;
        color: var(--text-primary-color);
        font-family: var(--text-font) !important;
    }

    .rdp-button {
        font-family: var(--text-font) !important;
    }

    @media all and (max-width: 450px) {
        .rdp {
            padding: 0 !important;
        }
    
        .rdp-caption_label {
            font-size: 1rem !important;
        }

        .rdp-cell {
            height: 45px;
        }

        .rdp-button {
            font-size: 1rem !important;
            width: 35px !important;
        }
    }
`

export const Label = styled.p`
    margin-bottom: .5rem;
    font-weight: bold;
    border-bottom: 1px solid var(--soft-lines-color);
`