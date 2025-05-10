import dayjs from 'dayjs'

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')
    return (
        <div className='card-border w-[360px] max-sm:w-full min-h-96'>
            <div className='card-interview'>
                <div className='absolute top-0 right-0 w-fit px-4'>
                    <p className='badge-text'>{normalizedType}</p>
                </div>
            </div>
        </div>
    )
}

export default InterviewCard