import { Card } from 'primereact/card';

const ThemeSelector = (props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-3/7 mt-10'>
            <div className='flex justify-center grid grid-cols-2 gap-4'>
                <Card className='theme-selector'>
                    Tous les thèmes
                </Card>
                {
                    props.themes.map((t,i) => 
                        <Card key={i} className='theme-selector'>
                            {t}
                        </Card>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default ThemeSelector;