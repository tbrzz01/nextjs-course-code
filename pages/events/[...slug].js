import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventLlist from '../../components/events/event-list';
import ResultsTitle from '../../components/results/results-title';

function FilteredEventsPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className='center'>Loading...</p>;
    }

    const year = +filteredData[0];
    const month = +filteredData[1];

    if (isNaN(year) || isNaN(month)
    || year > 2031 || year < 2021 || month < 1 || month > 12) {
        return <p>Invalid filter. Please adjust your values</p>;
    }

    const filteredEvents = getFilteredEvents({year, month});

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter</p>
    }

    const filteredDate = new Date(year, month - 1);

    return (
        <div>
            <ResultsTitle date={filteredDate} />
            <EventLlist events={filteredEvents} />
        </div>
    );
}

export default FilteredEventsPage;
