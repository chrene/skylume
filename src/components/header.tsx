import LocationSearch from './location-search';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <LocationSearch data={[]} value="" label="Search for a city" />
    </header>
  );
}
