import SectionHeader from '../components/SectionHeader';
import ToggleRow from '../components/ToggleRow';
import { useApp } from '../context/AppContext';

export default function Settings() {
  const { settings, toggleSetting } = useApp();

  return (
    <div className="space-y-6">
      <SectionHeader title="Settings" subtitle="Feature toggles built with dynamic state so they can later sync with backend preferences." />
      <div className="card p-5">
        <div className="space-y-3">
          {settings.map((item) => (
            <ToggleRow key={item.id} item={item} onToggle={toggleSetting} />
          ))}
        </div>
      </div>
    </div>
  );
}
