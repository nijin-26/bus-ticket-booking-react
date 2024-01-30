import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../config/constants';
import { HeaderWrapper } from './Header.styled';

export const Header = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        void i18n.changeLanguage(lang_code);
    };

    return (
        <HeaderWrapper>
            <h2>{t('home')}</h2>
            <select defaultValue={i18n.language} onChange={onChangeLang}>
                {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                ))}
            </select>
        </HeaderWrapper>
    );
};
