import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ( { id, description, amount, createdAt })=> (
        <Link className="listItem" to={ `/edit/${ id }` }>  
          <div>
              <h3 className="listItemTitle">{description}</h3>
              <span className="listItemSubtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
           </div>

           <h3 className="listItemData">{numeral(amount / 100).format('$0,0.00')}</h3>

        </Link>
);
