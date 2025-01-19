
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardContent, CardHeader, Typography } from "@mui/material";
import {
  StyledCard,
  ColorButton,
  SectionTitle,
  Description,
  VariantsGrid,
  VariantCard,
  SpecsList,
  BuildPriceButton,
  ErrorContainer,
  PageContainer,
  CarImage,
  ColorSelectorWrapper,
  Section
} from "./style";
import teslaRed from "../../assets/2-modelY.jpg"

const CarDetails = () => {
  const { model } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('red');

  console.log('Current model param:', model);

  const carData = {
    'model-s': {
      name: 'Model S',
      description: 'Model S is built for speed and endurance, with ludicrous acceleration, unparalleled performance and a sleek aesthetic.',
      startingPrice: '$74,990',
      variants: ['Long Range', 'Plaid'],
      colors: {
        red: teslaRed,
        blue: '/api/placeholder/800/400',
        white: '/api/placeholder/800/400',
        black: '/api/placeholder/800/400'
      },
      configurations: {
        'Long Range': {
          range: '405 miles',
          acceleration: '3.1s 0-60 mph',
          topSpeed: '155 mph'
        },
        'Plaid': {
          range: '396 miles',
          acceleration: '1.99s 0-60 mph',
          topSpeed: '200 mph'
        }
      }
    },
    'model-3': {
      name: 'Model 3',
      description: 'Model 3 is designed for electric-powered performance, with quick acceleration, long range and fast charging.',
      startingPrice: '$39,990',
      variants: ['Standard Range Plus', 'Long Range'],
      colors: {
        red: teslaRed,
        blue: '/api/placeholder/800/400',
        white: '/api/placeholder/800/400',
        black: '/api/placeholder/800/400'
      },
      configurations: {
        'Standard Range Plus': {
          range: '263 miles',
          acceleration: '5.3s 0-60 mph',
          topSpeed: '140 mph'
        },
        'Long Range': {
          range: '353 miles',
          acceleration: '4.2s 0-60 mph',
          topSpeed: '145 mph'
        }
      }
    },
    'model-x': {
      name: 'Model X',
      description: 'Model X is built for utility and performance, with standard all-wheel drive, best in class storage, and seating for up to seven.',
      startingPrice: '$84,990',
      variants: ['Long Range', 'Plaid'],
      colors: {
        red: teslaRed,
        blue: '/api/placeholder/800/400',
        white: '/api/placeholder/800/400',
        black: '/api/placeholder/800/400'
      },
      configurations: {
        'Long Range': {
          range: '348 miles',
          acceleration: '3.8s 0-60 mph',
          topSpeed: '155 mph'
        },
        'Plaid': {
          range: '333 miles',
          acceleration: '2.5s 0-60 mph',
          topSpeed: '163 mph'
        }
      }
    },
    'model-y': {
      name: 'Model Y',
      description: 'Model Y is a fully electric, mid-size SUV with unparalleled protection and versatile cargo space.',
      startingPrice: '$49,990',
      variants: ['Long Range', 'Performance'],
      colors: {
        red: teslaRed,
        blue: '/api/placeholder/800/400',
        white: '/api/placeholder/800/400',
        black: '/api/placeholder/800/400'
      },
      configurations: {
        'Long Range': {
          range: '330 miles',
          acceleration: '4.8s 0-60 mph',
          topSpeed: '135 mph'
        },
        'Performance': {
          range: '303 miles',
          acceleration: '3.5s 0-60 mph',
          topSpeed: '155 mph'
        }
      }
    }
  };


  const car = carData[model];

  if (!car) {
    return (
      <PageContainer>
        <ErrorContainer>
          <Typography variant="h5">Model not found</Typography>
          <BuildPriceButton variant="contained" onClick={() => navigate('/')}>
            Return to Home
          </BuildPriceButton>
        </ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <StyledCard>
        <CardHeader
          title={<Typography variant="h4">{car.name}</Typography>}
          subheader={
            <Typography variant="h5" sx={{ color: "#333", margin: "1rem 0", fontWeight: 500 }}>
              Starting at {car.startingPrice}
            </Typography>
          }
        />
        <CardContent>
          <CarImage
            src={car.colors[selectedColor]}
            alt={`${car.name} in ${selectedColor}`}
          />

          <Section>
            <SectionTitle>Select Color</SectionTitle>
            <ColorSelectorWrapper>
              {Object.keys(car.colors).map((color) => (
                <ColorButton
                  key={color}
                  color={color}
                  selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                  aria-label={color}
                />
              ))}
            </ColorSelectorWrapper>
          </Section>

          <Section>
            <SectionTitle>Description</SectionTitle>
            <Description>{car.description}</Description>
          </Section>

          <Section>
            <SectionTitle>Available Variants</SectionTitle>
            <VariantsGrid>
              {car.variants.map((variant) => (
                <VariantCard key={variant}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      {variant}
                    </Typography>
                    <SpecsList>
                      <li>Range: {car.configurations[variant].range}</li>
                      <li>Acceleration: {car.configurations[variant].acceleration}</li>
                      <li>Top Speed: {car.configurations[variant].topSpeed}</li>
                    </SpecsList>
                  </CardContent>
                </VariantCard>
              ))}
            </VariantsGrid>
          </Section>

          <BuildPriceButton
            variant="contained"
            color="primary"
            onClick={() => navigate(`/customize/${model}`)}
          >
            Build and Price
          </BuildPriceButton>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default CarDetails;