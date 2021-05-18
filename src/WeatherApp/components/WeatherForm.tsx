import { useCallback, useState, VFC } from 'react';
import { cities, CityIdType } from '../recoil/atom/cityIdState';
import { useCitySelector } from '../hooks/useCitySelector';

export const WeatherForm: VFC = () => {
  const [cityId, setCityId] = useState<CityIdType>();
  const { handleSetCityId } = useCitySelector();

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
    </form>
  );
};
