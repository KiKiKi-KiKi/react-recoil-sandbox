import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { cityIdState, CityIdType } from '../recoil/atom/cityIdState';

interface InterfaceUseCitySelector {
  cityId: CityIdType;
  handleSetCityId: (id: CityIdType) => void;
}

export const useCitySelector = (): InterfaceUseCitySelector => {
  const [cityId, setCityId] = useRecoilState(cityIdState);

  const handleSetCityId = useCallback(
    (cityId: CityIdType) => {
      setCityId(cityId);
    },
    [setCityId],
  );

  return {
    cityId,
    handleSetCityId,
  };
};
