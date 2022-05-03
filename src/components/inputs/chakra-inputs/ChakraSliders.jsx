import {
  ChakraProvider,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import React from 'react';
import CustomDivider from '../../custom-divider/CustomDivider';
import SectionHeading from '../../section-heading/SectionHeading';

const ChakraSliders = () => {
  return (
    <>
      <ChakraProvider>
        <div className="flex justify-evenly items-center">
          <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <RangeSlider
            paddingLeft={40}
            aria-label={['min', 'max']}
            colorScheme="pink"
            defaultValue={[10, 30]}
            orientation="vertical"
            minH="32"
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>

          <RangeSlider defaultValue={[120, 240]} min={0} max={200} step={30}>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </div>
      </ChakraProvider>
    </>
  );
};

export default ChakraSliders;
