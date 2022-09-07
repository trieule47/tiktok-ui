import Header from '~/Components/Layout/Components/Header';

export default function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className=''>
                <div className='content'>{children}</div>
            </div>
        </div>
    )
}
