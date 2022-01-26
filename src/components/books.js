import './books.css';

const Books = () => {
    return (
        <div className='Lesson-Panel'>
            <span className='School-of'>Action</span>
            <h2 className='Title'>The Hunger Games</h2>
            <span className='author'>Suzanne-Collins</span>
            <span className='actions'>Comments</span>
            <span className='actions'>Remove</span>
            <span className='actions'>Edit</span>
            <div className='Oval-2'></div>
            <span className='-Percent-Complete'>64%</span>
            <span className='Completed'>Completed</span>
            <span className='Current-Chapter'>CURRENT CHAPTER</span>
            <span className='Current-Lesson'>Chapter 17</span>
            <div className='Rectangle-2'>
                <span className='Update-progress'>UPDATE PROGRESS</span>
            </div>
        </div>
    );
}

export default Books;