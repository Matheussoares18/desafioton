import React from 'react';

import {Container, ItemsContainer, ScrollViewContainer} from './styles';
import Tenis from '../../assets/tennis.png';
import {ProductCard} from '../../components/ProductCard';

export function Home() {
  return (
    <Container>
      <ScrollViewContainer>
        <ItemsContainer>
          <ProductCard
            product={{
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
              id: 1,
              image: Tenis,
              price: 'R$ 99.99',
              title: 'Tenis de marca',
            }}
          />
        </ItemsContainer>
      </ScrollViewContainer>
    </Container>
  );
}
