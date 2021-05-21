import { CityIdType } from '../recoil/atom/cityIdState';
import { useSetRecoilState } from 'recoil';
import { weatherRequestId } from '../recoil/atomFamily/weatherRequestId';
import { useCallback } from 'react';

interface IuseRefreshWeatherByCityId {
  handleRefresh: () => void;
}

export const useRefreshWeatherByCityId = (
  cityId: CityIdType,
): IuseRefreshWeatherByCityId => {
  const setCityWeatherQueryRefreshId = useSetRecoilState(
    weatherRequestId(cityId),
  );

  const handleRefresh = useCallback(() => {
    setCityWeatherQueryRefreshId((requestId) => requestId + 1);
  }, [setCityWeatherQueryRefreshId]);

  return {
    handleRefresh,
  };
};
