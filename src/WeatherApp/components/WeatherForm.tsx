import { useCallback, useState, VFC } from 'react';
import { cities, CityIdType } from '../recoil/atom/cityIdState';
import { useCitySelector } from '../hooks/useCitySelector';
import { useRefreshWeatherByCityId } from '../hooks/useRefreshWeatherByCityId';

export const WeatherForm: VFC = () => {
  const [cityId, setCityId] = useState<CityIdType>();
  const { cityId: cityIdState, handleSetCityId } = useCitySelector();
  const { handleRefresh } = useRefreshWeatherByCityId(cityIdState);

  const handleChangeCity = useCallback(
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const id = (evt.currentTarget.value as CityIdType) || undefined;
      setCityId(id);
    },
    [],
  );

  const handleSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      handleSetCityId(cityId);
    },
    [cityId, handleSetCityId],
  );

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChangeCity} defaultValue="" value={cityId}>
        <option value="">選択なし</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <button type="submit">SUBMIT</button>
      <button type="button" onClick={handleRefresh}>
        Refresh
      </button>
    </form>
  );
};
