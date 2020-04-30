import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    alignt-items: center;
    margin: 50px 0;
`;

export const Cart = styled(Link)`
  display:flex;
  alignt-items: center;
  text-decoration: none;
  transition: opacity 0.5s;

   &:hover {
       opacity: 0.7;
   }
    div{
        text-align: right;
        margin-ricght:10px;

        strong{
            display:block;
            color: #fff;
        }

        span{
            font-size:12px;
            color: #999;
        }
    }
`;
